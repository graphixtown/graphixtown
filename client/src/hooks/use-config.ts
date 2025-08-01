import { useQuery } from "@tanstack/react-query";

export function useConfig<T>(configPath: string) {
  return useQuery<T>({
    queryKey: [configPath],
    queryFn: async () => {
      const response = await fetch(configPath);
      if (!response.ok) {
        throw new Error(`Failed to load ${configPath}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}
