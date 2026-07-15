import Link from "next/link";
import { CalendarDays, CheckCircle2, Circle } from "lucide-react";

import { DeleteButton } from "@/components/DeleteButton";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                             */}
      {/* ------------------------------------------------------------------ */}

      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="line-clamp-2 wrap-break-words">
            {task.title}
          </CardTitle>

          <Badge variant={task.completed ? "completed" : "pending"}>
            {task.completed ? (
              <>
                <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                Completed
              </>
            ) : (
              <>
                <Circle className="mr-1 h-3.5 w-3.5" />
                Pending
              </>
            )}
          </Badge>
        </div>
      </CardHeader>

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                            */}
      {/* ------------------------------------------------------------------ */}

      <CardContent className="space-y-4">
        <p className="min-h-12 whitespace-pre-wrap text-sm leading-6 text-slate-600 dark:text-slate-400">
          {task.description || "No description provided."}
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <CalendarDays className="h-4 w-4" />

          <time dateTime={task.createdAt.toISOString()}>
            {task.createdAt.toLocaleDateString()}
          </time>
        </div>
      </CardContent>

      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                             */}
      {/* ------------------------------------------------------------------ */}

      <CardFooter className="justify-between">
        <Button asChild variant="outline">
          <Link href={`/edit/${task.id}`}>
            Edit
          </Link>
        </Button>

        <DeleteButton taskId={task.id} />
      </CardFooter>
    </Card>
  );
}