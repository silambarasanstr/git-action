import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsId } from "../services/productService";
import Accordion from "../component/ui/Accordion";

const TemplatesDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await getProductsId(id);

        setProduct(response?.data || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ==================== LOADING ====================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-2 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />

          <p className="text-xs font-medium text-slate-600">
            Loading project...
          </p>
        </div>
      </div>
    );
  }

  // ==================== NOT FOUND ====================
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-slate-800">
              Project not found
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              The requested project could not be found.
            </p>

            <Link
              to="/git-action/templates"
              className="inline-flex items-center mt-4 px-3 py-2 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition"
            >
              ← Back to Templates
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-sm">
      {/* ==================== HEADER ==================== */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            to="/git-action/templates"
            className="inline-flex items-center text-xs text-blue-100 hover:text-white mb-3 transition"
          >
            ← Back to Templates
          </Link>

          <h1 className="text-2xl font-bold">{product.title}</h1>

          {product.projectDescription && (
            <p className="mt-2 max-w-3xl text-xs leading-5 text-blue-100">
              {product.projectDescription}
            </p>
          )}

          {/* Project Information */}
          <div className="flex flex-wrap gap-2 mt-4">
            {product.projectType && (
              <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-xs">
                {product.projectType}
              </span>
            )}

            {product.role && (
              <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-xs">
                Role: {product.role}
              </span>
            )}

            {product.projectDuration && (
              <span className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-xs">
                Duration: {product.projectDuration}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGIES ==================== */}
      {Array.isArray(product.technologies) &&
        product.technologies.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-3">
            <Accordion title=" Technologies Used">
              <div className="flex flex-wrap gap-2 mt-3">
                {product.technologies.map((technology, index) => (
                  <span
                    key={`${technology}-${index}`}
                    className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-xs font-medium hover:bg-blue-100 transition"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Accordion>
          </section>
        )}

      {/* ==================== FEATURES ==================== */}
      {Array.isArray(product.features) && product.features.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-2">
          <Accordion title="Project Features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.features.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="group border border-slate-200 rounded-lg p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition"
                >
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 w-6 h-6 rounded-md bg-blue-100 text-blue-600 text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>

                    <h3 className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </section>
      )}

      {/* ==================== APPLICATION PAGES ==================== */}
      {Array.isArray(product.pages) && product.pages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-2">
          <Accordion title="Application Pages">
            <div className="space-y-2">
              {product.pages.map((page, index) => (
                <div
                  key={`${page?.name || "page"}-${index}`}
                  className="bg-white border border-slate-200 rounded-lg p-3 hover:border-blue-200 hover:shadow-sm transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-800">
                      {page?.name}
                    </h3>

                    {page?.path && (
                      <code className="w-fit text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {page.path}
                      </code>
                    )}
                  </div>

                  {page?.description && (
                    <p className="text-xs text-slate-500 mt-2 leading-5">
                      {page.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Accordion>
        </section>
      )}

      {/* ==================== FOLDER STRUCTURE ==================== */}
      {product.folderStructure && (
        <section className="max-w-7xl mx-auto px-4 py-2">
          <Accordion title="Project Folder Structure" defaultOpen={true}>
            <div className="bg-slate-950 border border-slate-800 text-emerald-300 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs leading-5">
                <code>{product.folderStructure}</code>
              </pre>
            </div>
          </Accordion>
        </section>
      )}

      {/* ==================== APPLICATION FLOW ==================== */}
      {Array.isArray(product.applicationFlow) &&
        product.applicationFlow.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-2">
            <Accordion title="Application Flow">
              <div className="space-y-2">
                {product.applicationFlow.map((step, index) => (
                  <div
                    key={`${step}-${index}`}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50 transition"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs font-semibold flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>

                    <p className="text-xs text-slate-700 pt-1 leading-5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Accordion>
          </section>
        )}

      {/* ==================== FRONTEND / BACKEND ==================== */}
      {(product.frontEnd || product.backEnd) && (
        <section className="max-w-7xl mx-auto px-4 py-2">
          <Accordion title="Frontend & Backend">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Frontend */}
              {product.frontEnd && (
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      FE
                    </div>

                    <h3 className="text-base font-semibold text-blue-800">
                      Frontend
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-5">
                    {product.frontEnd}
                  </p>
                </div>
              )}

              {/* Backend */}
              {product.backEnd && (
                <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                      BE
                    </div>

                    <h3 className="text-base font-semibold text-emerald-800">
                      Backend
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-5">
                    {product.backEnd}
                  </p>
                </div>
              )}
            </div>
          </Accordion>
        </section>
      )}

      {/* ==================== INSTALLATION ==================== */}
      {Array.isArray(product.installation) &&
        product.installation.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-2 pb-6">
            <Accordion title="Installation">
              <div className="bg-slate-950 border border-slate-800 text-green-400 rounded-lg p-4 overflow-x-auto">
                {product.installation.map((command, index) => (
                  <div key={`${command}-${index}`} className="mb-1 last:mb-0">
                    <code className="text-xs whitespace-nowrap">
                      <span className="text-violet-400">$</span> {command}
                    </code>
                  </div>
                ))}
              </div>
            </Accordion>
          </section>
        )}
    </div>
  );
};

export default TemplatesDetails;
