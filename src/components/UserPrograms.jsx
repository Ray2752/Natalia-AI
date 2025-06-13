'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card';
import {
  Dumbbell, Sparkles, Users, Clock, AppleIcon, ShieldIcon,
} from 'lucide-react';
import { USER_PROGRAMS } from '@/constants';

import ProgramDetailsButton from '@/components/ProgramDetailsButton';  // ← único import del botón
const UserPrograms = () => (
  <div className="w-full pb-24 pt-16 relative">
    <div className="container mx-auto max-w-6xl px-4">

      {/* HEADER ----------------------------------------------------------------- */}
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/70">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">Program Gallery</span>
          </div>
          <div className="text-sm text-muted-foreground">Featured Plans</div>
        </div>

        <div className="p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">AI-Generated </span>
            <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Explore personalized fitness plans our AI assistant has created for other users
          </p>

          {/* STATS --------------------------------------------------------------- */}
          <div className="flex items-center justify-center gap-16 mt-10 font-mono">
            {[
              { value: '500+', label: 'PROGRAMS' },
              { value: '3min', label: 'CREATION TIME' },
              { value: '100%', label: 'PERSONALIZED' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <p className="text-3xl text-primary">{value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAM CARDS ----------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {USER_PROGRAMS.map((program) => (
          <Card
            key={program.id}
            className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors overflow-hidden"
          >
            {/* CARD HEADER ------------------------------------------------------ */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-primary">USER.{program.id}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {program.fitness_level.toUpperCase()}
              </div>
            </div>

            {/* CARD BODY -------------------------------------------------------- */}
            <CardHeader className="pt-6 px-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-border">
                  <img
                    src={program.profilePic}
                    alt={program.first_name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl text-foreground">
                    {program.first_name}
                    <span className="text-primary">.exe</span>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <Users className="h-4 w-4" />
                    {program.age}y • {program.workout_days}d/week
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center gap-4">
                <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-sm text-primary flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {program.fitness_goal}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  v3.5
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-5">
              {/* details */}
              <div className="space-y-5 pt-2">
                {[
                  {
                    icon: <Dumbbell className="h-5 w-5" />,
                    title: program.workout_plan.title,
                    desc: program.equipment_access,
                  },
                  {
                    icon: <AppleIcon className="h-5 w-5" />,
                    title: program.diet_plan.title,
                    desc: 'System optimized nutrition',
                    bg: 'bg-secondary/10 text-secondary',
                  },
                  {
                    icon: <ShieldIcon className="h-5 w-5" />,
                    title: 'AI Safety Protocols',
                    desc: 'Protection systems enabled',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className={`p-2 rounded-md ${item.bg || 'bg-primary/10 text-primary'} mt-0.5`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* description */}
              <div className="mt-5 pt-5 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  <span className="text-primary">&gt; </span>
                  {program.workout_plan.description.substring(0, 120)}…
                </div>
              </div>
            </CardContent>

            {/* CARD FOOTER ------------------------------------------------------- */}
            <CardFooter className="px-5 py-4 border-t border-border">
              <Link href={`/programs/${program.id}`} className="w-full" passHref>
                <ProgramDetailsButton />   {/* el toast + bloqueo de navegación */}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA -------------------------------------------------------------------- */}
      <div className="mt-16 text-center">
        <Link href="/gen-program">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
          >
            Generate Your Program
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <p className="text-muted-foreground mt-4">
          Join 500+ users with AI-customized fitness programs
        </p>
      </div>
    </div>
  </div>
);

export default UserPrograms;
