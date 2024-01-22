import * as React from 'react';

interface BabelData {
  stories: Array<any>;
  versions: Array<any>;
  backups: Array<any>;
  activity: Array<any>;
}

interface BabelDataComponentProps {
  data: BabelData;
}

export const BabelDataComponent: React.FC<BabelDataComponentProps> = ({ data }) => {
  return (
    <div>
        <div className="p-4 bg-blue-500 text-white">Hello, world!</div>
      <h1>Babel Data</h1>
      <h2>Stories</h2>
      <pre>{JSON.stringify(data.stories, null, 2)}</pre>
      <h2>Versions</h2>
      <pre>{JSON.stringify(data.versions, null, 2)}</pre>
      <h2>Backups</h2>
      <pre>{JSON.stringify(data.backups, null, 2)}</pre>
      <h2>Activity</h2>
      <pre>{JSON.stringify(data.activity, null, 2)}</pre>
    </div>
  );
};
