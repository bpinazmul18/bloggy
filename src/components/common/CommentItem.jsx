export default function CommentItem({ comment }) {
  return (
    <div className="comment">
      <div className="p-4 rounded-xl flex items-center space-x-4">
        <div className="relative">
          <img className="w-10 h-10 rounded-full" src={comment.img} alt="" />
          <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div className="text-left">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-medium text-black">{comment.name}</div>
            <div className="text-sm text-gray">Today 6:03 pm</div>
          </div>
          <p className="text-slate-500">{comment.text}</p>
        </div>
      </div>
    </div>
  );
}
