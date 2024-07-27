import Title from '../Common/Title/Title.jsx';
import TVProgramsList from '../Common/Lists/TVProgramsList.jsx'
export default function EtherWidget({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
