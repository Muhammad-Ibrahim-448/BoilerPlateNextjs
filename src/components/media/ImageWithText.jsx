import { cn } from '@/lib/helpers'

export const ImageWithText = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  features,
  reversed = false,
}) => {
  return (
    <div className={cn(
      'flex flex-col gap-12',
      reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
    )}>
      <div className="w-full lg:w-1/2">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 shadow-2xl">
          <div className="flex items-center justify-center h-full">
            <svg className="h-32 w-32 text-slate-400 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {subtitle && (
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          {description}
        </p>
        {features && (
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-slate-700 dark:text-slate-300">
                <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}