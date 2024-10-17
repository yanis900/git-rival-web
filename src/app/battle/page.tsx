"use client";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon, RotateCcw, Swords } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface GithubUser {
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
}

export default function BattlePage() {
  const [usernameOne, setUsernameOne] = useState("");
  const [usernameTwo, setUsernameTwo] = useState("");
  const [submittedOne, setSubmittedOne] = useState(false);
  const [submittedTwo, setSubmittedTwo] = useState(false);
  const [submittedThree, setSubmittedThree] = useState(true);
  const [dataOne, setDataOne] = useState<GithubUser | null>(null);
  const [dataTwo, setDataTwo] = useState<GithubUser | null>(null);
  const [scoreOne, setScoreOne] = useState<number | null>(null);
  const [scoreTwo, setScoreTwo] = useState<number | null>(null);
  const [result, setResult] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameOne(event.target.value);
  };
  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameTwo(event.target.value);
  };

  const handleSubmit = async () => {
    setSubmittedOne(true);

    const response = await fetch(`http://localhost:8000/api/${usernameOne}`);
    const dataOne = await response.json();
    setDataOne(dataOne);
    const scoreOne = dataOne.following + dataOne.followers;
    setScoreOne(scoreOne);
    console.log(dataOne);
  };

  const handleSubmitTwo = async () => {
    setSubmittedTwo(true);

    const response = await fetch(`http://localhost:8000/api/${usernameTwo}`);
    const dataTwo = await response.json();
    setDataTwo(dataTwo);
    const scoreTwo = dataTwo.following + dataTwo.followers;
    setScoreTwo(scoreTwo);
    setSubmittedThree(false);
  };

  const handleBattle = () => {
    if (scoreOne !== null && scoreTwo !== null) {
      if (scoreOne > scoreTwo) {
        setResult("userOne");
      } else if (scoreTwo > scoreOne) {
        setResult("userTwo");
      } else {
        setResult("tie");
      }
    }
    setSubmittedThree(true);
  };

  const handleReset = () => {
    setResult("");
    setDataOne(null);
    setDataTwo(null);
    setScoreOne(null);
    setScoreTwo(null);
    setSubmittedOne(false);
    setSubmittedTwo(false);
    setSubmittedThree(true);
    setUsernameOne("");
    setUsernameTwo("");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid w-full max-w-2xl grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center">
            {!submittedOne ? (
              <div className="relative w-full max-w-xs">
                <Input
                  type="text"
                  placeholder="Enter GitHub Username"
                  className="pr-10"
                  value={usernameOne}
                  onChange={handleChange}
                  required
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    onClick={handleSubmit}
                    disabled={!usernameOne}
                  >
                    <GithubIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ) : (
              dataOne && (
                <div className="rounded-lg shadow-lg w-64">
                  {result === "userOne" ? (
                    <div className="h-24 bg-green-500 rounded-t-lg" />
                  ) : result === "userTwo" ? (
                    <div className="h-24 bg-red-500 rounded-t-lg" />
                  ) : (
                    <div className="h-24 bg-primary rounded-t-lg" />
                  )}
                  <Image
                    src={dataOne.avatar_url}
                    height="100"
                    width="100"
                    className="rounded-full -mt-12 border-4 border-white mx-auto"
                    alt="User avatar"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="text-center mt-2">
                    <h2 className="text-lg font-semibold">{dataOne.name}</h2>
                  </div>
                  <div className="flex justify-around my-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">
                        {dataOne.followers}
                      </h3>
                      <p className="text-gray-500">Followers</p>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">
                        {dataOne.following}
                      </h3>
                      <p className="text-gray-500">Following</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            {!submittedTwo ? (
              <div className="relative w-full max-w-xs">
                <Input
                  type="text"
                  placeholder="Enter GitHub Username"
                  className="pr-10"
                  value={usernameTwo}
                  onChange={handleChangeTwo}
                  required
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    onClick={handleSubmitTwo}
                    disabled={!usernameTwo}
                  >
                    <GithubIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ) : (
              dataTwo && (
                <div className="rounded-lg shadow-lg w-64">
                  {result === "userTwo" ? (
                    <div className="h-24 bg-green-500 rounded-t-lg" />
                  ) : result === "userOne" ? (
                    <div className="h-24 bg-red-500 rounded-t-lg" />
                  ) : (
                    <div className="h-24 bg-primary rounded-t-lg" />
                  )}
                  <Image
                    src={dataTwo.avatar_url}
                    height="100"
                    width="100"
                    className="rounded-full -mt-12 border-4 border-white mx-auto"
                    alt="User avatar"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="text-center mt-2">
                    <h2 className="text-lg font-semibold">{dataTwo.name}</h2>
                  </div>
                  <div className="flex justify-around my-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">
                        {dataTwo.followers}
                      </h3>
                      <p className="text-gray-500">Followers</p>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">
                        {dataTwo.following}
                      </h3>
                      <p className="text-gray-500">Following</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-5">
          <Button
            type="submit"
            className="w-full max-w-xs"
            onClick={handleBattle}
            disabled={submittedThree}
          >
            <Swords />
          </Button>
          {result && (
            <Button onClick={handleReset}>
              <RotateCcw />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
