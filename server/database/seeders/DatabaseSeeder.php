<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        for($x = 1; $x <= 10; $x++){
            \App\Models\User::factory()->create([
                'name' => fake()->name(),
                'email' => fake()->email(),
                'password' => Hash::make('password123')
            ]);

            for($i = 0; $i < 3; $i++){
                \App\Models\Post::create([
                    'content' => fake()->realText(),
                    'user_id' => $x,
                ]);
            }

        }
    }
}
