import React, { FC } from 'react';

interface SimpleHeaderProps {
  title: string;
  className?: string;
  className2?: string;
}

const SimpleHeader: FC<SimpleHeaderProps> = ({ title, className = "", className2 = "" }) => {
  return (
    <div className={`${className} lg:flex lg:items-center`}>
      <div className="min-w-0 flex-1 border-b">
        <h2 className={`text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ${className2}`}>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default SimpleHeader