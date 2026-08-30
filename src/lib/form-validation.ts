export class FormValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FormValidationError';
  }
}

type TextFieldOptions = {
  label: string;
  required?: boolean;
  maxLength: number;
};

export function readTextField(
  value: unknown,
  { label, required = false, maxLength }: TextFieldOptions,
) {
  if (typeof value !== 'string') {
    if (required) {
      throw new FormValidationError(`${label} is required.`);
    }
    return '';
  }

  const normalized = value.trim();

  if (required && normalized.length === 0) {
    throw new FormValidationError(`${label} is required.`);
  }

  if (normalized.length > maxLength) {
    throw new FormValidationError(
      `${label} must be ${maxLength} characters or fewer.`,
    );
  }

  return normalized;
}

export function readEmailField(value: unknown, label = 'Email') {
  const email = readTextField(value, {
    label,
    required: true,
    maxLength: 254,
  });
  const [localPart, domain, ...extraParts] = email.split('@');
  const practicalEmailPattern =
    /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;

  if (
    extraParts.length > 0 ||
    !localPart ||
    !domain ||
    localPart.length > 64 ||
    localPart.startsWith('.') ||
    localPart.endsWith('.') ||
    localPart.includes('..') ||
    !practicalEmailPattern.test(email)
  ) {
    throw new FormValidationError(`Please enter a valid ${label.toLowerCase()}.`);
  }

  return email;
}

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return entities[character];
  });
}
