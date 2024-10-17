import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Leaderboard() {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-xl text-center font-[family-name:var(--font-alagard)]">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent className="p-3 space-y-2">
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">1.</span>
            <Avatar className="h-6 w-6">
              <AvatarImage src={``} alt={`@user`} />
              <AvatarFallback>user</AvatarFallback>
            </Avatar>
            <span className="text-sm">@user</span>
          </div>
          <span className="text-xs text-gray-500">10 pts</span>
        </li>
      </CardContent>
    </Card>
  );
}
