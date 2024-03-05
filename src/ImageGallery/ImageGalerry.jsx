export default function ImageGallery({ gallery }) {
  return (
    <ul>
      {gallery.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
