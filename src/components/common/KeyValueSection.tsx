type KeyValueSectionProps = {
  data: {
    key: string;
    value: string | number;
  }[];
  className?;
  styleClasses?: {
    row?;
    key?;
    value?;
  };
  styles?;
};

const KeyValueSection = ({
  data,
  className,
  styleClasses,
  styles,
}: KeyValueSectionProps) => {
  return (
    <div className={className}>
      {data?.map((item, index) => (
        <div key={index} className={styleClasses?.row + " " + styles?.row}>
          <span className={styleClasses?.key + " " + styles?.key}>
            {item.key}
          </span>
          <span className={styleClasses?.value + " " + styles?.value}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default KeyValueSection;
