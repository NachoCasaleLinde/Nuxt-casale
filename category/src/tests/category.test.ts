import { describe, it, expect } from 'vitest';
import { getCategoryPath } from '../utils/categoryUtils';

const categories = [
  {
    name: 'category1',
    subcategories: [
      { name: 'category2', subcategories: [] },
      {
        name: 'category3',
        subcategories: [{ name: 'category4', subcategories: [] }]
      }
    ]
  },
  { name: 'category5', subcategories: [] }
];

describe('getCategoryPath', () => {
  it('should return the correct path for category4', () => {
    const result = getCategoryPath(categories, 'category4');
    expect(result).toBe('/category1/category3/category4');
  });

  it('should return the correct path for category2', () => {
    const result = getCategoryPath(categories, 'category2');
    expect(result).toBe('/category1/category2');
  });

  it('should return the correct path for category5', () => {
    const result = getCategoryPath(categories, 'category5');
    expect(result).toBe('/category5');
  });

  it('should return null if the category does not exist', () => {
    const result = getCategoryPath(categories, 'category6');
    expect(result).toBeNull();
  });
});
