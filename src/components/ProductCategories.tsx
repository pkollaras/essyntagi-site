
import { useRef } from 'react';
import { useInView } from '@/utils/animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Package, ShoppingBag, Calculator } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="categories" 
      ref={sectionRef} 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block glass px-3 py-1 rounded-full text-sm font-medium text-esyntagi-700 mb-3">
            Κατηγορίες Προϊόντων
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ολοκληρωμένη διαχείριση όλων των ειδών του φαρμακείου
          </h2>
          <p className="text-xl text-gray-600">
            Το Esyntagi υποστηρίζει τη δημιουργία καλαθιού με πολλαπλά είδη και εξειδικευμένη διαχείριση για κάθε κατηγορία προϊόντων
          </p>
        </div>

        <div className={isInView ? 'animate-slide-up' : 'opacity-0'}>
          <Tabs defaultValue="prescription" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="prescription" className="text-sm py-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Συνταγογραφούμενα Φάρμακα</span>
                <span className="sm:hidden">Συνταγογρ/να</span>
              </TabsTrigger>
              <TabsTrigger value="otc" className="text-sm py-3 flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Μη Συνταγογραφούμενα Φάρμακα</span>
                <span className="sm:hidden">Μη Συνταγογρ/να</span>
              </TabsTrigger>
              <TabsTrigger value="parapharmacy" className="text-sm py-3 flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">Παραφαρμακευτικά Προϊόντα</span>
                <span className="sm:hidden">Παραφαρμ/κά</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="prescription" className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-esyntagi-700 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Συνταγογραφούμενα Φάρμακα
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Πλήρης διαχείριση συνταγογραφούμενων φαρμάκων με άμεση σύνδεση στο σύστημα ΗΔΙΚΑ για γρήγορη και ακριβή εκτέλεση συνταγών.
                </p>
                <div className="mt-6">
                  <div className="font-semibold mb-2 text-gray-800">Χαρακτηριστικά:</div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Άμεση εκτέλεση ηλεκτρονικών συνταγών</li>
                    <li>Αυτόματος έλεγχος αλληλεπιδράσεων και δοσολογίας</li>
                    <li>Αυτόματη τιμολόγηση προς ασφαλιστικά ταμεία</li>
                    <li>Ιστορικό συνταγογραφήσεων ανά ασθενή</li>
                    <li>Εκτύπωση ετικετών με οδηγίες χρήσης</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="otc" className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-esyntagi-700 flex items-center gap-2">
                <Package className="h-5 w-5" />
                Μη Συνταγογραφούμενα Φάρμακα (ΜΗ.ΣΥ.ΦΑ.)
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Διαχειριστείτε εύκολα τα Μη Συνταγογραφούμενα Φάρμακα με πρόσβαση σε ενημερωμένη βάση δεδομένων και εύκολη προσθήκη στο καλάθι αγορών.
                </p>
                <div className="mt-6">
                  <div className="font-semibold mb-2 text-gray-800">Χαρακτηριστικά:</div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Πλήρης βάση δεδομένων ΜΗ.ΣΥ.ΦΑ.</li>
                    <li>Γρήγορη αναζήτηση με πολλαπλά κριτήρια</li>
                    <li>Παρακολούθηση αποθέματος και ημερομηνιών λήξης</li>
                    <li>Διαχείριση τιμολογιακής πολιτικής</li>
                    <li>Στατιστικά πωλήσεων και τάσεων</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="parapharmacy" className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-esyntagi-700 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Παραφαρμακευτικά Προϊόντα
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Επωφεληθείτε από την αρχικοποιημένη βάση με πάνω από 10.000 προϊόντα παραφαρμάκου, εύκολη διαχείριση και προσθήκη στο καλάθι αγορών.
                </p>
                <div className="mt-6">
                  <div className="font-semibold mb-2 text-gray-800">Δείγμα Βάσης Προϊόντων:</div>
                  <div className="overflow-x-auto mt-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Κατηγορία</TableHead>
                          <TableHead>Προϊόντα</TableHead>
                          <TableHead>Μάρκες</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Δερμοκαλλυντικά</TableCell>
                          <TableCell>3.500+</TableCell>
                          <TableCell>85+</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Συμπληρώματα Διατροφής</TableCell>
                          <TableCell>2.800+</TableCell>
                          <TableCell>65+</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Βρεφικά Είδη</TableCell>
                          <TableCell>1.200+</TableCell>
                          <TableCell>40+</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Ορθοπεδικά</TableCell>
                          <TableCell>950+</TableCell>
                          <TableCell>25+</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Άλλες Κατηγορίες</TableCell>
                          <TableCell>1.550+</TableCell>
                          <TableCell>45+</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
