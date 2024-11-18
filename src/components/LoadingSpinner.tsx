import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-16 h-16 border-4 border-blue-200 border-t-blue-900 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}