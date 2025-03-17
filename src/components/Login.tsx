
import { useRef, useState } from 'react';
import { useInView } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Lock, User, LogIn } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Το όνομα χρήστη πρέπει να έχει τουλάχιστον 2 χαρακτήρες",
  }),
  password: z.string().min(6, {
    message: "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες",
  }),
});

const Login = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.1
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
      window.location.href = "https://app.esyntagi.gr";
    }, 1500);
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-xl mx-auto mb-10 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-esyntagi-700 mb-3">
            Πρόσβαση
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Συνδεθείτε στο σύστημα</h2>
          <p className="text-xl text-gray-600">
            Αποκτήστε πρόσβαση στο Esyntagi και διαχειριστείτε το φαρμακείο σας με ασφάλεια
          </p>
        </div>

        <div className={`max-w-md mx-auto ${isInView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Είσοδος στο <span className="text-esyntagi-600">Esyntagi</span>
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Όνομα Χρήστη</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input 
                            placeholder="Εισάγετε το όνομα χρήστη"
                            className="pl-10"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Κωδικός</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                          <Input 
                            type="password" 
                            placeholder="Εισάγετε τον κωδικό σας"
                            className="pl-10"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <a href="#" className="text-esyntagi-600 hover:text-esyntagi-700">
                      Ξεχάσατε τον κωδικό;
                    </a>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Σύνδεση...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <LogIn className="h-5 w-5" />
                      Σύνδεση
                    </div>
                  )}
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Δεν έχετε λογαριασμό; <a href="#" className="text-esyntagi-600 hover:text-esyntagi-700 font-medium">Δημιουργήστε έναν</a>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a 
                  href="https://app.esyntagi.gr" 
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <span>Μετάβαση στο app.esyntagi.gr</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
