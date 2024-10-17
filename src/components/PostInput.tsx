import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Code } from "lucide-react";

export default function PostInput() {
  return (
    <Card className="mb-4">
      <CardContent className="p-3">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Share your thoughts..."
            className="flex-grow text-sm"
          />
          <Button size="sm">
            <Code className="mr-2 h-4 w-4" />
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
