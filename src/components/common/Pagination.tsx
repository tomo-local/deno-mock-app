type Props = {
  next: {
    url: string;
    isHidden: boolean;
    text: string;
  };
  prev: {
    url: string;
    isHidden: boolean;
    text: string;
  };
};

function Pagination(props: Props) {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center mt-4">
        <a
          href={`${props.prev.url}`}
          style={{ visibility: props.prev.isHidden ? "hidden" : "visible" }}
          className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
        >
          {props.prev.text || "前へ"}
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={`${props.next.url}`}
          style={{ visibility: props.next.isHidden ? "hidden" : "visible" }}
          className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
        >
          {props.next.text || "次へ"}
        </a>
      </div>
    </div>
  );
}

export default Pagination;
