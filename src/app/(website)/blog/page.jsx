"use client"

import Link from 'next/link'
import { Badge } from '@/components/common/Badge'
import { motion } from 'framer-motion'
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
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-4">
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </div>
      </div>
      
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article 
                key={post.id} 
                className="group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="info">{post.category}</Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      Read more 
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}