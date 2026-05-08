type SchemaData = Record<string, unknown> | Record<string, unknown>[];

export default function SchemaJsonLd({ data }: { data: SchemaData }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
