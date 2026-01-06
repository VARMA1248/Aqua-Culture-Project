
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { inventory } from '@/lib/placeholder-data';
import { AddInventoryItemDialog } from './_components/AddInventoryItemDialog';
import { Button } from '@/components/ui/button';

export default function InventoryPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>Current stock of feed and medicine.</CardDescription>
        </div>
        <AddInventoryItemDialog>
            <Button>Add Item</Button>
        </AddInventoryItemDialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Cost per Unit</TableHead>
              <TableHead className="text-right">Total Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.category}</Badge>
                </TableCell>
                <TableCell>
                  {item.quantity.toLocaleString()} {item.unit}
                </TableCell>
                <TableCell>₹{item.costPerUnit.toLocaleString()}</TableCell>
                <TableCell className="text-right">₹{(item.quantity * item.costPerUnit).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
