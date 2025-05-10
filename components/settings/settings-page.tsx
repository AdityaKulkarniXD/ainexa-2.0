'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, Palette, Mail } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Settings
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Manage your account settings and preferences
            </p>
          </motion.div>

          <Tabs defaultValue="profile">
            <TabsList className="mb-8">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center">
                <Palette className="w-4 h-4 mr-2" />
                Appearance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                  Profile Information
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                  Notification Preferences
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Email Notifications',
                      description: 'Receive updates and alerts via email',
                      icon: <Mail className="w-4 h-4" />
                    },
                    {
                      title: 'Job Recommendations',
                      description: 'Get notified about new job opportunities',
                      icon: <Bell className="w-4 h-4" />
                    },
                    {
                      title: 'Mentorship Updates',
                      description: 'Receive updates about your mentorship sessions',
                      icon: <User className="w-4 h-4" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                  Privacy Settings
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Profile Visibility',
                      description: 'Make your profile visible to other users',
                      icon: <User className="w-4 h-4" />
                    },
                    {
                      title: 'Data Collection',
                      description: 'Allow us to collect usage data to improve our service',
                      icon: <Shield className="w-4 h-4" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                  Appearance Settings
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Dark Mode',
                      description: 'Switch between light and dark themes',
                      icon: <Palette className="w-4 h-4" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}