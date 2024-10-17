"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/${user?.username}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        console.log("User data:", data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [user?.username]);

  return (
    <Card>
      {data ? (
        <CardContent className="p-4">
          <div className="flex flex-col items-center">
            <Avatar className="h-20 w-20">
              <AvatarImage src={data.avatar_url} alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h2 className="mt-2 text-lg font-semibold">{data.name}</h2>
            <p className="text-sm text-gray-500">@{data.login}</p>
            <p className="mt-2 text-center text-xs">
              Full-stack developer passionate about React and Node.js
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <p className="font-semibold">Repos</p>
              <p className="text-gray-500">{data.public_repos}</p>
            </div>
            <div>
              <p className="font-semibold">Followers</p>
              <p className="text-gray-500">{data.followers}</p>
            </div>
            <div>
              <p className="font-semibold">Following</p>
              <p className="text-gray-500">{data.following}</p>
            </div>
          </div>
        </CardContent>
      ) : (
        <p>Loading...</p>
      )}
    </Card>
  );
}
