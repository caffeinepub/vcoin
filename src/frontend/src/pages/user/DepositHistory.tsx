import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetCallerDepositSubmissions } from '../../hooks/useQueries';
import { Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function DepositHistory() {
  const { data: submissions, isLoading } = useGetCallerDepositSubmissions();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const parsedSubmissions = submissions?.map((s) => {
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  }).filter(Boolean) || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Deposit History</h1>
        <p className="text-muted-foreground">Track your payment submissions and their status</p>
      </div>

      {parsedSubmissions.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No deposits yet. Start by buying VCoin!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {parsedSubmissions.map((submission: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {submission.vcnAmount?.toLocaleString() || 'N/A'} VCN
                  </CardTitle>
                  <Badge variant={submission.status === 'approved' ? 'default' : submission.status === 'rejected' ? 'destructive' : 'secondary'}>
                    {submission.status || 'Pending'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">USDT Amount:</span>
                    <div className="font-medium">${submission.usdtAmount?.toFixed(2) || 'N/A'}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Transaction Hash:</span>
                    <div className="font-mono text-xs truncate">{submission.txHash || 'N/A'}</div>
                  </div>
                </div>
                {submission.rejectionReason && (
                  <div className="mt-4 p-3 bg-destructive/10 rounded text-sm">
                    <span className="font-medium">Rejection Reason:</span> {submission.rejectionReason}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
