# Golden General Supplies — Portfolio

موقع بورتفوليو لشركة جولدن للتوريدات العمومية (هدايا ومنتجات دعائية).

- **تعديل المحتوى:** كل البيانات والنصوص والمنتجات والفئات في `src/data.js`.
- **إضافة منتج:** حط الصورة (webp) في `public/products/` وضيف سطر في `products` بنفس الاسم.
- **الألوان والخطوط:** في `@theme` جوه `src/index.css` (Tailwind v4).
- **رابط الموقع (canonical وصورة المشاركة على واتساب/جوجل):** في `index.html`.

```bash
npm install
npm run dev     # تشغيل محلي
npm run build   # بناء للنشر (Vercel يكتشف Vite تلقائياً)
```
