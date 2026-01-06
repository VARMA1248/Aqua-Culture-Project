
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { attendance, workers } from '@/lib/placeholder-data';
import { AddAttendanceDialog } from './_components/AddAttendanceDialog';
import { Button } from '@/components/ui/button';
import { AttendanceActions } from './_components/AttendanceActions';

const getWorkerName = (workerId: string) => {
  return workers.find((w) => w.id === workerId)?.name || 'Unknown';
};

export default function AttendancePage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Worker Attendance</CardTitle>
          <CardDescription>A log of worker attendance records.</CardDescription>
        </div>
        <AddAttendanceDialog>
            <Button>Add Attendance</Button>
        </AddAttendanceDialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Worker</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendance.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{new Date(record.date).toLocaleDateString('en-IN')}</TableCell>
                <TableCell>{getWorkerName(record.workerId)}</TableCell>
                <TableCell>
                  <Badge variant={record.status === 'Present' ? 'default' : 'destructive'} className={record.status === 'Present' ? 'bg-accent text-accent-foreground' : ''}>
                    {record.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                    <AttendanceActions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
