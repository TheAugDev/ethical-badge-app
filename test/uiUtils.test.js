import { describe, it, expect } from 'vitest';
import { escapeHtml } from '../src/js/ui/uiUtils.js';

describe('escapeHtml', () => {
  it('escapes HTML special characters', () => {
    expect(escapeHtml('<div>Test & "quotes"</div>')).toBe('&lt;div&gt;Test &amp; &quot;quotes&quot;&lt;/div&gt;');
  });
});
