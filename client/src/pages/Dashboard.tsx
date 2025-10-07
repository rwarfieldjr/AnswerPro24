import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLocation } from "wouter";

export type CallSummary = {
  id: string;
  created_at: string | null;
  call_date: string | null; // optional explicit date field
  caller_name: string | null;
  message_summary: string | null;
  call_duration_seconds: number | null;
  status: string | null;
};

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [rows, setRows] = useState<CallSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("call_summaries")
        .select("id, created_at, call_date, caller_name, message_summary, call_duration_seconds, status")
        .order("created_at", { ascending: false })
        .limit(50);

      if (!isMounted) return;
      if (error) {
        setError(error.message);
        setRows([]);
      } else {
        setError(null);
        setRows((data ?? []) as CallSummary[]);
      }
      setLoading(false);
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setLocation("/login");
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Calls</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-10 text-sm text-muted-foreground">Loading…</div>
          ) : error ? (
            <div className="py-10 text-sm text-destructive">{error}</div>
          ) : rows.length === 0 ? (
            <div className="py-10 text-sm text-muted-foreground">No call summaries yet.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[160px]">Date</TableHead>
                  <TableHead>Caller Name</TableHead>
                  <TableHead>Message Summary</TableHead>
                  <TableHead className="w-[140px]">Call Duration</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => {
                  const date = row.call_date ?? row.created_at ?? "";
                  const duration = row.call_duration_seconds ?? 0;
                  const durationLabel = `${Math.floor(duration / 60)}m ${duration % 60}s`;
                  return (
                    <TableRow key={row.id}>
                      <TableCell>{new Date(date).toLocaleString()}</TableCell>
                      <TableCell>{row.caller_name ?? "—"}</TableCell>
                      <TableCell className="max-w-[500px] truncate">{row.message_summary ?? "—"}</TableCell>
                      <TableCell>{durationLabel}</TableCell>
                      <TableCell>{row.status ?? "—"}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
