import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Announcements</h1>
        <p className="text-muted-foreground">Create and manage user announcements</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Announcements</CardTitle>
          <CardDescription>Announcements shown to users on login</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p>No announcements created yet.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
