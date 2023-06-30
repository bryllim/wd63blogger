<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function create(Request $request){
        $post = new Post();
        $post->content = $request->post;
        $post->user_id = $request->user_id;
        $post->save();

        return response()->json([
            'success' => true,
        ]);
    }

    public function delete(Request $request){
        $post = Post::find($request->post_id);
        $post->delete();
        return response()->json([
            'success' => true,
        ]);
    }

    public function fetch(){
        $temp_posts = Post::orderBy('id', 'desc')->get();

        $posts = array();

        foreach($temp_posts as $post){
            $post->posted_at = $post->created_at->diffForHumans();
            $post->user = $post->user;
            $posts[] = $post;
        }

        return $posts;
    }
}
