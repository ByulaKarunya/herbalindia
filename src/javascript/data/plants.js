import tulasi from '../../assets/images/tulasi.jpg';
import neem from '../../assets/images/neem.jpeg';
import alovera from '../../assets/images/alovera.jpeg';
import banyan from '../../assets/images/banyan.jpeg'; // Add the appropriate path for the image
import lotus from '../../assets/images/lotus.jpeg'; // Add the appropriate path for the image
import greenTea from '../../assets/images/greenTea.jpeg'; // Add the appropriate path for the image

export const plants = [
  {
    id: 1,
    name: "Tulasi",
    botanicalName: "Ocimum sanctum",
    image: tulasi,
    uses: [
      "Boosts immunity",
      "Helps reduce stress and anxiety",
      "Promotes respiratory health",
    ],
    description:
      "Tulasi, also known as Holy Basil, is an aromatic herb revered for its medicinal properties. It has been used in Ayurvedic medicine for centuries.",
    video: null,
    model: null,
    precautions: [
      "Avoid excessive consumption during pregnancy.",
      "Consult a doctor if you have bleeding disorders.",
    ],
  },
  {
    id: 2,
    name: "Neem",
    botanicalName: "Azadirachta indica",
    image: neem,
    uses: [
      "Detoxifies the body",
      "Supports skin health",
      "Fights bacterial and fungal infections",
    ],
    description:
      "Neem is a powerful herb known for its antibacterial and anti-inflammatory properties. It's widely used in skincare products and herbal medicines.",
    video: null,
    model: null,
    precautions: [
      "Neem should be avoided by pregnant women.",
      "Consult a doctor before using neem if you have kidney or liver issues.",
    ],
  },
  {
    id: 3,
    name: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    image: alovera,
    uses: [
      "Soothes skin irritation",
      "Aids in digestion",
      "Promotes hair growth",
    ],
    description:
      "Aloe Vera is a succulent plant known for its healing properties. It is commonly used in skin care products and health supplements.",
    video: null,
    model: null,
    precautions: [
      "Avoid internal consumption of aloe vera during pregnancy.",
      "Excessive use may lead to skin irritation.",
    ],
  },
  {
    id: 4,
    name: "Banyan",
    botanicalName: "Ficus benghalensis",
    image: banyan,
    uses: [
      "Promotes oral health",
      "Reduces inflammation",
      "Supports skin health",
    ],
    description:
      "The Banyan tree is revered in many cultures for its longevity and medicinal properties. Its bark and leaves are often used in traditional remedies.",
    video: null,
    model: null,
    precautions: [
      "Consult a healthcare provider before using banyan in medicinal amounts.",
    ],
  },
  {
    id: 5,
    name: "Lotus",
    botanicalName: "Nelumbo nucifera",
    image: lotus,
    uses: [
      "Supports skin hydration",
      "Promotes calmness and relaxation",
      "Aids in digestion",
    ],
    description:
      "The Lotus flower is not only a symbol of purity but also known for its health benefits. Its petals and seeds are used in various traditional medicines.",
    video: null,
    model: null,
    precautions: [
      "Avoid use during pregnancy without medical advice.",
    ],
  },
  {
    id: 6,
    name: "Green Tea",
    botanicalName: "Camellia sinensis",
    image: greenTea,
    uses: [
      "Boosts metabolism",
      "Supports heart health",
      "Enhances brain function",
    ],
    description:
      "Green Tea is known for its high antioxidant content and numerous health benefits. It is commonly consumed as a beverage and used in supplements.",
    video: null,
    model: null,
    precautions: [
      "Avoid excessive consumption if sensitive to caffeine.",
    ],
  },
];
