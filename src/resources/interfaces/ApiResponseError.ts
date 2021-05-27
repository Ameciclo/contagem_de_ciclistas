export interface ApiResponseError {
  code: number;
  errorObj?: string | Record<string, unknown>;
  errorsArray?: any[];
}
