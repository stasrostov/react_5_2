import Title from '../Common/Title/Title';
import DefinitionsList from '../Common/Lists/DefinitionsList'
export default function VisitedPagesWidget({ title, items }) {
  return (
    <div className="VisitedPages-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}
