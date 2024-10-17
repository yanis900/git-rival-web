import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { Card } from "./ui/card";

export default function Post() {
  return (
    <Card className="p-4">
      <div className="flex items-start space-x-3">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={``}
            alt={`@user`}
          />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">@user</p>
            <p className="text-xs text-gray-500">1h</p>
          </div>
          <p className="text-sm">
            Implemented a new feature using React hooks. Code looks cleaner now!
            #ReactJS
          </p>
          <div className="flex items-center space-x-2 text-xs">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ThumbsUp className="mr-1 h-3 w-3" />
              Like
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <MessageSquare className="mr-1 h-3 w-3" />
              Comment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
