'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function AIAssistantPage() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<{
    role: 'user' | 'assistant';
    content: string;
  }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    // Add user message to conversation
    setConversation(prev => [...prev, { role: 'user', content: message }]);

    // Simulate AI response
    setTimeout(() => {
      setConversation(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'I understand you\'re interested in career guidance. I\'m here to help you explore different career paths and provide personalized recommendations based on your interests and skills.'
        }
      ]);
      setIsLoading(false);
    }, 1500);

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4">
              <Brain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              AI Career Assistant
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Get personalized career guidance and advice from our AI assistant
            </p>
          </motion.div>

          <Card className="p-6">
            <div className="space-y-4 mb-4 max-h-[500px] overflow-y-auto">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === 'assistant' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      msg.role === 'assistant'
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white'
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-4 bg-white dark:bg-slate-800">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about career paths, skills, or job opportunities..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !message.trim()}>
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </form>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">
                Suggested Topics
              </h3>
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setMessage("What career paths match my skills?")}
                  >
                    What career paths match my skills?
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setMessage("How can I prepare for a tech career?")}
                  >
                    How can I prepare for a tech career?
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setMessage("What skills are in high demand?")}
                  >
                    What skills are in high demand?
                  </Button>
                </li>
              </ul>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">
                Tips
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Be specific about your interests and goals</li>
                <li>• Ask about specific industries or roles</li>
                <li>• Request actionable next steps</li>
                <li>• Follow up on unclear points</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}