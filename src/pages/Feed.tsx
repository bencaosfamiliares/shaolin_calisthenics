import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Share, Camera } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const mockPosts: Post[] = [];

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now(),
        author: 'Você',
        avatar: '',
        time: 'agora',
        content: newPost,
        likes: 0,
        comments: 0,
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-white border-b border-border p-6">
        <h1 className="text-2xl font-bold text-center">Meu Diário de Treino</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Create Post */}
        <Card className="shadow-card">
          <CardHeader>
            <h2 className="text-lg font-semibold">Compartilhe seu progresso</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Como foi seu treino hoje?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[100px] rounded-xl"
            />
            
            <div className="flex justify-between items-center">
              <Button variant="ghost" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Foto
              </Button>
              
              <Button 
                variant="default"
                onClick={handlePost}
                disabled={!newPost.trim()}
              >
                Postar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{post.time}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground">{post.content}</p>
                
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full rounded-xl"
                  />
                )}
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}