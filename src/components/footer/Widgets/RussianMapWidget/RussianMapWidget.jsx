import Title from '../Common/Title/Title';
import List from '../Common/Lists/List'
export default function RussianMapWidget({ title, items }) {
  return (
    <div className="Russian-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}
