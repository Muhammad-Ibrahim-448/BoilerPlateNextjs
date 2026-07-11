// src/app/(website)/blog/page.jsx
'use client'

import Link from 'next/link'
import { Badge } from '@/components/common/Badge'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { useThemeClasses, usePageHeroStyles, useBlogStyles } from '@/lib/theme-helpers'
import { cn } from '@/lib/helpers'

const posts = [
  {
    id: 1,
    title: 'Getting Started with Our Platform',
    excerpt: 'Learn the basics and get up and running in minutes with our comprehensive guide.',
    category: 'Tutorial',
    date: '2024-03-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: '10 Tips for Better Productivity',
    excerpt: 'Discover proven strategies to boost your team productivity and efficiency.',
    category: 'Productivity',
    date: '2024-03-10',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'The Future of Business Analytics',
    excerpt: 'Explore emerging trends and technologies shaping the future of data analytics.',
    category: 'Insights',
    date: '2024-03-05',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Customer Success Story: TechCorp',
    excerpt: 'See how TechCorp transformed their operations using our platform.',
    category: 'Case Study',
    date: '2024-02-28',
    readTime: '4 min read',
  },
]

export default function BlogPage() {
  const { theme } = useTheme()
  const themeClasses = useThemeClasses()
  const pageHero = usePageHeroStyles()
  const blogStyles = useBlogStyles()
  const isDark = theme === 'dark'

  // Map category to badge variant
  const getBadgeVariant = (category) => {
    const variants = {
      'Tutorial': 'primary',
      'Productivity': 'success',
      'Insights': 'info',
      'Case Study': 'warning',
    }
    return variants[category] || 'neutral'
  }

  return (
    <>
      {/* Hero Section */}
      <div className={cn(
        pageHero.container,
        themeClasses.bg.primary
      )}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10",
            isDark ? "bg-blue-500/10" : "bg-blue-500/5"
          )} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
              "border transition-colors duration-300",
              isDark 
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                : "bg-blue-50 text-blue-600 border-blue-200"
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Our Blog
            </span>
          </motion.div>

          <h1 className={cn(
            "text-4xl md:text-5xl font-bold text-center mb-4",
            themeClasses.text.primary
          )}>
            Blog
          </h1>
          <p className={cn(
            "text-xl text-center max-w-2xl mx-auto",
            themeClasses.text.secondary
          )}>
            Insights, tutorials, and updates from our team
          </p>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <section className={cn(
        "py-24 theme-transition relative overflow-hidden",
        themeClasses.bg.primary
      )}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10",
            isDark ? "bg-purple-500/10" : "bg-purple-500/5"
          )} />
          <div className={cn(
            "absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10",
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
          )} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              themeClasses.text.primary
            )}>
              Latest Articles
            </h2>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              themeClasses.text.secondary
            )}>
              Stay updated with our latest insights and tutorials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article 
                key={post.id} 
                className={cn(
                  "group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1",
                  blogStyles.card
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={getBadgeVariant(post.category)}>
                      {post.category}
                    </Badge>
                    <span className={cn(
                      "text-sm",
                      blogStyles.text.muted
                    )}>
                      {post.date}
                    </span>
                  </div>
                  <h2 className={cn(
                    "text-2xl font-bold mb-3 transition-colors",
                    blogStyles.text.title
                  )}>
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className={cn(
                    "mb-4 line-clamp-3",
                    blogStyles.text.description
                  )}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-sm",
                      blogStyles.text.muted
                    )}>
                      {post.readTime}
                    </span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className={cn(
                        "font-medium flex items-center gap-1 transition-colors group/link",
                        blogStyles.text.link
                      )}
                    >
                      Read more 
                      <span className="inline-block transition-transform group-hover:translate-x-1 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts Link */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/blog/archive"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                "hover:scale-[1.02]",
                isDark 
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              )}
            >
              View All Posts
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}