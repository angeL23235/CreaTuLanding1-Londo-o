import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where,
    doc,
    getDoc,
    addDoc
} from "firebase/firestore";
import { app } from './config';

const db = getFirestore(app);

export const obtenerProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productos = [];

    querySnapshot.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id });
    });

    productos.sort((a, b) => a.categoria.localeCompare(b.categoria));

    return productos;
};

export const filtrarPorCategoria = async (categoria) => {
    const q = query(collection(db, "products"), where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);
    const productos = [];

    querySnapshot.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id });
    });

    return productos;
};

export const obtenerUnProducto = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        return null;
    }
};

export const crearOrden = async (orden) => {
    await addDoc(collection(db, "ordenes"), orden);
};
