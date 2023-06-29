<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'User registered successfully!']);
    }

    public function login(Request $request){

        $credentials = $request->validate([
            'email' => "required|email",
            'password' => "required",
        ]);

        if(auth()->attempt($credentials)){
            $user = auth()->user();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'token' => $token,
                'user_id' => $user->id,
                'success' => true,
            ]);
        }else{
            return response()->json([
                'message' => "Login failed.",
                'success' => false,
            ]);
        }
        
    }

    public function getuser(Request $request){
        $user = User::find($request->user_id);
        return response()->json($user);
    }
}
