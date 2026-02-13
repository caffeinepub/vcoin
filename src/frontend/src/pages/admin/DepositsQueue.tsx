import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DepositsQueue() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Deposits Queue</h1>
        <p className="text-muted-foreground">Review and approve pending deposit submissions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Deposits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p>No pending deposits at this time.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
