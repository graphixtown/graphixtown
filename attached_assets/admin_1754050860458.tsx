import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { Service, PortfolioItem, ContactSubmission } from "@shared/schema";

export default function Admin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingPortfolio, setEditingPortfolio] = useState<PortfolioItem | null>(null);

  // Queries
  const { data: services = [], isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: portfolioItems = [], isLoading: portfolioLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const { data: contactSubmissions = [], isLoading: contactLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
  });

  // Service mutations
  const createServiceMutation = useMutation({
    mutationFn: async (service: any) => {
      const response = await apiRequest("POST", "/api/services", service);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({ title: "Service created successfully" });
      setEditingService(null);
    },
  });

  const updateServiceMutation = useMutation({
    mutationFn: async ({ id, ...service }: any) => {
      const response = await apiRequest("PUT", `/api/services/${id}`, service);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({ title: "Service updated successfully" });
      setEditingService(null);
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/services/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
      toast({ title: "Service deleted successfully" });
    },
  });

  // Portfolio mutations
  const createPortfolioMutation = useMutation({
    mutationFn: async (item: any) => {
      const response = await apiRequest("POST", "/api/portfolio", item);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      toast({ title: "Portfolio item created successfully" });
      setEditingPortfolio(null);
    },
  });

  const updatePortfolioMutation = useMutation({
    mutationFn: async ({ id, ...item }: any) => {
      const response = await apiRequest("PUT", `/api/portfolio/${id}`, item);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      toast({ title: "Portfolio item updated successfully" });
      setEditingPortfolio(null);
    },
  });

  const deletePortfolioMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/portfolio/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      toast({ title: "Portfolio item deleted successfully" });
    },
  });

  const handleServiceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const features = formData.get("features")?.toString().split(",").map(f => f.trim()) || [];
    
    const service = {
      title: formData.get("title"),
      description: formData.get("description"),
      icon: formData.get("icon"),
      features,
      price: formData.get("price"),
      order: parseInt(formData.get("order")?.toString() || "0"),
    };

    if (editingService) {
      updateServiceMutation.mutate({ id: editingService.id, ...service });
    } else {
      createServiceMutation.mutate(service);
    }
  };

  const handlePortfolioSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const item = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      imageUrl: formData.get("imageUrl"),
      order: parseInt(formData.get("order")?.toString() || "0"),
      featured: formData.get("featured") === "on",
    };

    if (editingPortfolio) {
      updatePortfolioMutation.mutate({ id: editingPortfolio.id, ...item });
    } else {
      createPortfolioMutation.mutate(item);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--dark)] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Site
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">GFX Town Admin</h1>
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Manage Services</h2>
              <Button onClick={() => setEditingService({} as Service)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>

            {editingService && (
              <Card className="bg-[var(--dark-secondary)] border-gray-700">
                <CardHeader>
                  <CardTitle>{editingService.id ? "Edit Service" : "Create Service"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleServiceSubmit} className="space-y-4">
                    <Input
                      name="title"
                      placeholder="Service Title"
                      defaultValue={editingService.title || ""}
                      required
                    />
                    <Textarea
                      name="description"
                      placeholder="Service Description"
                      defaultValue={editingService.description || ""}
                      required
                    />
                    <Input
                      name="icon"
                      placeholder="Icon name (e.g., palette, video, magic)"
                      defaultValue={editingService.icon || ""}
                      required
                    />
                    <Input
                      name="features"
                      placeholder="Features (comma-separated)"
                      defaultValue={editingService.features?.join(", ") || ""}
                      required
                    />
                    <Input
                      name="price"
                      placeholder="Price (e.g., $299+)"
                      defaultValue={editingService.price || ""}
                      required
                    />
                    <Input
                      name="order"
                      type="number"
                      placeholder="Order"
                      defaultValue={editingService.order || 0}
                      required
                    />
                    <div className="flex gap-2">
                      <Button type="submit">
                        {editingService.id ? "Update" : "Create"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingService(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {servicesLoading ? (
                <div>Loading services...</div>
              ) : (
                services.map((service) => (
                  <Card key={service.id} className="bg-[var(--dark-secondary)] border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-gray-400 mb-2">{service.description}</p>
                          <div className="flex gap-2 mb-2">
                            {service.features.map((feature, index) => (
                              <Badge key={index} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-lg font-bold text-primary">{service.price}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingService(service)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteServiceMutation.mutate(service.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Manage Portfolio</h2>
              <Button onClick={() => setEditingPortfolio({} as PortfolioItem)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Portfolio Item
              </Button>
            </div>

            {editingPortfolio && (
              <Card className="bg-[var(--dark-secondary)] border-gray-700">
                <CardHeader>
                  <CardTitle>{editingPortfolio.id ? "Edit Portfolio Item" : "Create Portfolio Item"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePortfolioSubmit} className="space-y-4">
                    <Input
                      name="title"
                      placeholder="Project Title"
                      defaultValue={editingPortfolio.title || ""}
                      required
                    />
                    <Textarea
                      name="description"
                      placeholder="Project Description"
                      defaultValue={editingPortfolio.description || ""}
                      required
                    />
                    <Select name="category" defaultValue={editingPortfolio.category || ""}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="graphics">Graphics</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="motion">Motion</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      name="imageUrl"
                      placeholder="Image URL"
                      defaultValue={editingPortfolio.imageUrl || ""}
                      required
                    />
                    <Input
                      name="order"
                      type="number"
                      placeholder="Order"
                      defaultValue={editingPortfolio.order || 0}
                      required
                    />
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="featured"
                        defaultChecked={editingPortfolio.featured || false}
                      />
                      Featured
                    </label>
                    <div className="flex gap-2">
                      <Button type="submit">
                        {editingPortfolio.id ? "Update" : "Create"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setEditingPortfolio(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioLoading ? (
                <div>Loading portfolio...</div>
              ) : (
                portfolioItems.map((item) => (
                  <Card key={item.id} className="bg-[var(--dark-secondary)] border-gray-700">
                    <CardContent className="p-4">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="secondary">{item.category}</Badge>
                            {item.featured && <Badge variant="default">Featured</Badge>}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingPortfolio(item)}
                          >
                            <Pencil className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deletePortfolioMutation.mutate(item.id)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Submissions</h2>
            
            <div className="space-y-4">
              {contactLoading ? (
                <div>Loading contact submissions...</div>
              ) : contactSubmissions.length === 0 ? (
                <Card className="bg-[var(--dark-secondary)] border-gray-700">
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-400">No contact submissions yet.</p>
                  </CardContent>
                </Card>
              ) : (
                contactSubmissions.map((submission) => (
                  <Card key={submission.id} className="bg-[var(--dark-secondary)] border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {submission.firstName} {submission.lastName}
                          </h3>
                          <p className="text-gray-400">{submission.email}</p>
                        </div>
                        <Badge variant={submission.status === "new" ? "default" : "secondary"}>
                          {submission.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-400">Service</p>
                          <p>{submission.service}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Budget</p>
                          <p>{submission.budget}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-400">Description</p>
                        <p>{submission.description}</p>
                      </div>
                      <p className="text-sm text-gray-400">
                        Submitted: {submission.createdAt ? new Date(submission.createdAt).toLocaleDateString() : 'N/A'}
                      </p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
