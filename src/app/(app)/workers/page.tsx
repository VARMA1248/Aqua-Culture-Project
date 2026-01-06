import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { workers } from '@/lib/placeholder-data';
import { AddWorkerDialog } from './_components/AddWorkerDialog';
import { Button } from '@/components/ui/button';
import { WorkerActions } from './_components/WorkerActions';

export default function WorkersPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Workers</CardTitle>
            <CardDescription>Manage your employees and their roles.</CardDescription>
        </div>
        <AddWorkerDialog>
            <Button>Add Worker</Button>
        </AddWorkerDialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workers.map((worker) => (
              <TableRow key={worker.id}>
                <TableCell className="font-medium">{worker.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{worker.role}</Badge>
                </TableCell>
                <TableCell>
                  ₹{worker.salary.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                    <WorkerActions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
