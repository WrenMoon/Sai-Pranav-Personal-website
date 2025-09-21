
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

// Helper function to create a URL-friendly slug
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .substring(0, 100); // Limit length
}

// Helper function to extract date from URL
function extractDateFromUrl(url: string): Date {
  const dateMatch = url.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//);
  if (dateMatch) {
    const [, year, month, day] = dateMatch;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  return new Date(); // fallback to current date
}

// Helper function to extract category and tags from content and title
function extractCategoryAndTags(title: string, content: string): { category: string; tags: string[] } {
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();
  
  let category = 'General';
  let tags: string[] = [];

  // Determine category based on content
  if (titleLower.includes('bebras') || contentLower.includes('bebras') || contentLower.includes('computational thinking')) {
    category = 'Computational Thinking';
    tags.push('Bebras', 'Computational Thinking', 'Competition');
  } else if (titleLower.includes('robotics') || titleLower.includes('robot') || titleLower.includes('frc') || titleLower.includes('ftc') || titleLower.includes('fgc')) {
    category = 'Robotics';
    tags.push('Robotics', 'Competition', 'FRC', 'Programming');
  } else if (titleLower.includes('empowered') || contentLower.includes('empowered') || titleLower.includes('global collaboration')) {
    category = 'empowerED';
    tags.push('empowerED', 'Global Collaboration', 'Student Initiative');
  } else if (titleLower.includes('award') || titleLower.includes('win') || titleLower.includes('champion') || titleLower.includes('achievement')) {
    category = 'Achievements';
    tags.push('Achievement', 'Award', 'Recognition');
  } else if (titleLower.includes('mentorship') || titleLower.includes('teaching') || titleLower.includes('outreach')) {
    category = 'Mentorship';
    tags.push('Mentorship', 'Teaching', 'Outreach');
  } else if (titleLower.includes('ctis') || titleLower.includes('conference') || titleLower.includes('presentation')) {
    category = 'Speaking';
    tags.push('Conference', 'Speaking', 'Presentation');
  } else if (titleLower.includes('app') || titleLower.includes('mobile') || titleLower.includes('development')) {
    category = 'App Development';
    tags.push('App Development', 'Mobile Apps', 'Technology');
  }

  // Add additional tags based on content
  if (contentLower.includes('mit')) tags.push('MIT');
  if (contentLower.includes('programming') || contentLower.includes('code')) tags.push('Programming');
  if (contentLower.includes('cad')) tags.push('CAD', 'Design');
  if (contentLower.includes('team')) tags.push('Teamwork');
  if (contentLower.includes('innovation')) tags.push('Innovation');
  if (contentLower.includes('student')) tags.push('Student Leadership');

  // Remove duplicates and limit to 8 tags
  tags = [...new Set(tags)].slice(0, 8);

  return { category, tags };
}

// Helper function to create excerpt from content
function createExcerpt(content: string): string {
  // Remove HTML tags and clean up the content
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  // Take first 200 characters for excerpt
  if (cleanContent.length <= 200) {
    return cleanContent;
  }
  
  // Find the last complete sentence within 200 characters
  const excerpt = cleanContent.substring(0, 200);
  const lastSentenceEnd = Math.max(excerpt.lastIndexOf('.'), excerpt.lastIndexOf('!'), excerpt.lastIndexOf('?'));
  
  if (lastSentenceEnd > 100) {
    return excerpt.substring(0, lastSentenceEnd + 1);
  }
  
  // If no sentence break, cut at last space and add ellipsis
  const lastSpace = excerpt.lastIndexOf(' ');
  return excerpt.substring(0, lastSpace) + '...';
}

async function main() {
  console.log('🚀 Starting database seed...');

  try {
    // Read and parse CSV file
    const csvPath = path.join(__dirname, '../../..', 'Uploads/complete_scraped_website_data.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
    });

    console.log(`📊 Found ${records.length} records in CSV`);

    // Clear existing data
    console.log('🧹 Clearing existing blog posts...');
    await prisma.blogPost.deleteMany({});
    await prisma.achievement.deleteMany({});

    // Seed blog posts
    console.log('📝 Creating blog posts...');
    let createdCount = 0;
    let skippedCount = 0;

    for (const record of records) {
      try {
        if (!record.title || !record.content || record.status !== 'success') {
          skippedCount++;
          continue;
        }

        const publishedAt = extractDateFromUrl(record.url);
        const slug = createSlug(record.title);
        const excerpt = createExcerpt(record.content);
        const { category, tags } = extractCategoryAndTags(record.title, record.content);
        
        // Parse images from CSV (they're comma-separated URLs in a string)
        let images: string[] = [];
        if (record.images) {
          try {
            // The images are in a JSON array format in the CSV
            images = JSON.parse(record.images.replace(/'/g, '"')) || [];
            // Filter out tracking pixels and logos
            images = images.filter(img => 
              !img.includes('pixel.wp.com') && 
              !img.includes('wpcom-gray-white.png') &&
              !img.includes('gravatar.com') &&
              img.includes('http')
            ).slice(0, 5); // Limit to 5 images
          } catch (e) {
            images = [];
          }
        }

        // Determine featured image (first valid image or default based on category)
        let featuredImage = images[0] || null;
        if (!featuredImage) {
          // Assign default images based on category
          switch (category) {
            case 'Robotics':
              featuredImage = '/images/robotics.jpg';
              break;
            case 'Computational Thinking':
              featuredImage = '/images/comp_thinking.jpg';
              break;
            case 'Achievements':
              featuredImage = '/images/award.jpg';
              break;
            case 'empowerED':
              featuredImage = '/images/global_meeting.jpg';
              break;
            case 'Speaking':
              featuredImage = '/images/tech_bg.jpg';
              break;
            case 'Mentorship':
              featuredImage = '/images/classroom.jpg';
              break;
            case 'App Development':
              featuredImage = '/images/tech_bg.jpg';
              break;
            default:
              featuredImage = '/images/tech_bg.jpg';
          }
        }

        await prisma.blogPost.create({
          data: {
            title: record.title.replace(' – Sai Pranav Gandhi', '').trim(),
            slug: slug,
            content: record.content,
            excerpt: excerpt,
            featuredImage: featuredImage,
            images: images,
            tags: tags,
            category: category,
            status: 'published',
            publishedAt: publishedAt,
          },
        });

        createdCount++;
        
        if (createdCount % 10 === 0) {
          console.log(`✅ Created ${createdCount} blog posts...`);
        }

      } catch (error) {
        console.error(`❌ Error creating blog post for "${record.title}":`, error);
        skippedCount++;
      }
    }

    console.log(`🎉 Blog posts seeding completed: ${createdCount} created, ${skippedCount} skipped`);

    // Seed achievements
    console.log('🏆 Creating achievements...');
    
    const achievements = [
      {
        title: "National Bebras Champion 2024",
        description: "Achieved National Champion status in Bebras Challenge among 40,000+ participants, demonstrating exceptional computational thinking skills",
        year: 2024,
        category: "competition",
        rank: "1st",
        participants: "40,000+",
        imageUrl: "/images/comp_thinking.jpg"
      },
      {
        title: "Engineering Inspiration Award - Team RFactor 6024",
        description: "First Indian team to win the prestigious Engineering Inspiration Award at FRC Championships, Houston",
        year: 2025,
        category: "competition",
        rank: "Winner",
        participants: "640+ teams from 30+ countries",
        imageUrl: "/images/robotics.jpg"
      },
      {
        title: "1st Place MCT 2024-25",
        description: "Secured first rank in Mathematics Concept Test conducted by AGMTA with 98 marks out of 100",
        year: 2025,
        category: "academic",
        rank: "1st",
        participants: "2500+ students",
        imageUrl: "/images/award.jpg"
      },
      {
        title: "empowerED Co-founder",
        description: "Co-founded global student technology empowerment initiative connecting students across continents",
        year: 2024,
        category: "leadership",
        rank: "Founder",
        participants: "50+ students globally",
        imageUrl: "/images/global_meeting.jpg"
      },
      {
        title: "3rd Place - MIT Hack the Climate",
        description: "Won third place in 'Hack the Climate' hackathon at MIT AI and Education Summit 2024",
        year: 2024,
        category: "competition",
        rank: "3rd",
        participants: "International participants",
        imageUrl: "/images/tech_bg.jpg"
      },
      {
        title: "CTiS Conference Speaker",
        description: "Presented at Computational Thinking in Schools conferences (2024 & 2025) on robotics and education",
        year: 2025,
        category: "speaking",
        rank: "Speaker",
        participants: "70+ educators and researchers",
        imageUrl: "/images/classroom.jpg"
      }
    ];

    for (const achievement of achievements) {
      await prisma.achievement.create({
        data: achievement,
      });
    }

    console.log(`🏆 Created ${achievements.length} achievements`);

    console.log('✨ Database seeding completed successfully!');
    
    // Print summary
    const blogCount = await prisma.blogPost.count();
    const achievementCount = await prisma.achievement.count();
    
    console.log('\n📊 Final Summary:');
    console.log(`📝 Blog Posts: ${blogCount}`);
    console.log(`🏆 Achievements: ${achievementCount}`);

  } catch (error) {
    console.error('💥 Error during seeding:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error('💥 Seed failed:', error);
    process.exit(1);
  });
