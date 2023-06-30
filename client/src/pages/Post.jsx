export default function Post({post_id, content, posted_at, author, deletePost}){
    return (
        <div className="card my-3">
            <div className="card-body">
                <span className="fw-bold">{author.name}</span>
                &nbsp;
                <small>{posted_at}</small>
                {
                    (author.id == localStorage.getItem('user_id')) ?
                    <button onClick={ ()=>{deletePost(post_id)} } className="btn btn-sm btn-rounded btn-outline-danger float-end">x</button>
                    : ""
                }
                <hr />
                <p>{content}</p>
            </div>
        </div>
    )
}