import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllUsers } from '../../hooks/useQueries';
import { Loader2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function UsersManagement() {
  const { data: users, isLoading } = useGetAllUsers();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Users Management</h1>
        <p className="text-muted-foreground">View and manage registered users</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users ({users?.length || 0})</CardTitle>
        </CardHeader>
        <CardContent>
          {!users || users.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>No users registered yet.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Referral Code</TableHead>
                  <TableHead>Referred By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(([principal, profile]) => (
                  <TableRow key={principal.toString()}>
                    <TableCell className="font-medium">{profile.name}</TableCell>
                    <TableCell>{profile.email}</TableCell>
                    <TableCell>
                      <code className="text-xs">{profile.referralCode}</code>
                    </TableCell>
                    <TableCell>
                      {profile.referredBy ? <code className="text-xs">{profile.referredBy}</code> : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
