import Title from '../Common/Title/Title';
import TVProgramsList from '../Common/Lists/TVProgramsList'
export default function TVProgramWidget({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
