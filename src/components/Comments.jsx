import CommentItem from "./common/CommentItem";

export default function Comments({ comments }) {
  return (
    <div className="lg:w-8/12 py-12 block lg:mx-auto">
      {comments.map((comment) => {
        return <CommentItem key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
