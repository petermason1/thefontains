# Rebuild Reference Docs

Reference links for rebuilding `www.thefontains.com` with Next.js, React, and Tailwind CSS v4.

## Next.js

- Main docs: [https://nextjs.org/docs](https://nextjs.org/docs)
- App Router overview: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
- Routing fundamentals: [https://nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)
- Data fetching patterns: [https://nextjs.org/docs/app/building-your-application/data-fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- Images and optimization: [https://nextjs.org/docs/app/building-your-application/optimizing/images](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- Deployment: [https://nextjs.org/docs/app/building-your-application/deploying](https://nextjs.org/docs/app/building-your-application/deploying)

## React

- React docs: [https://react.dev/](https://react.dev/)
- API reference: [https://react.dev/reference/react](https://react.dev/reference/react)
- Hooks reference: [https://react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)

## Tailwind CSS v4

- Next.js install guide: [https://tailwindcss.com/docs/installation/framework-guides/nextjs](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- Core docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Utility classes: [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
- Theme variables and customization: [https://tailwindcss.com/docs/theme](https://tailwindcss.com/docs/theme)
- Dark mode: [https://tailwindcss.com/docs/dark-mode](https://tailwindcss.com/docs/dark-mode)

## Suggested Rebuild Order

1. Set up global layout and navigation in `src/app/layout.js`.
2. Recreate homepage sections in `src/app/page.js`.
3. Add route segments for each existing website page.
4. Move typography/colors/spacing into reusable Tailwind patterns.
5. Add responsive and accessibility checks before production deployment.
