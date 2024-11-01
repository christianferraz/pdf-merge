import { PDFMerger } from "@/components/PDFMerger";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">União de PDFs - Humap-UFMS</h1>
            <p className="text-gray-600">Unir múltiplos pdfs em um único documento</p>
          </div>
          <PDFMerger />
        </div>
      </main>
      <footer className="text-center text-gray-600 text-sm p-4">@ Desenvolvido pela Unidade de Infraestrutura, Suporte e Segurança de TI</footer>
    </div>
  );
}
